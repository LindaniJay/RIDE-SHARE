import { ApprovalRequest } from '../models/ApprovalRequest';
import { User } from '../models/User';

interface AutoApprovalRule {
  requestType: string;
  conditions: {
    minUserRating?: number;
    verifiedUser?: boolean;
    minAccountAge?: number; // in days
  };
}

class AutoApprovalService {
  private rules: AutoApprovalRule[] = [
    {
      requestType: 'ProfileVerification',
      conditions: {
        verifiedUser: true,
        minAccountAge: 30
      }
    },
    {
      requestType: 'DocumentVerification',
      conditions: {
        verifiedUser: true,
        minAccountAge: 7
      }
    }
  ];

  async checkAutoApproval(request: ApprovalRequest): Promise<boolean> {
    const rule = this.rules.find(r => r.requestType === request.requestType);
    if (!rule) return false;

    const user = await User.findByPk(request.submittedById);
    if (!user) return false;

    const accountAge = Math.floor((Date.now() - (user.created_at?.getTime() || Date.now())) / (1000 * 60 * 60 * 24));

    // Check conditions
    if (rule.conditions.verifiedUser && !user.is_email_verified) return false;
    if (rule.conditions.minAccountAge && accountAge < rule.conditions.minAccountAge) return false;

    // Auto-approve
    await request.update({
      status: 'Approved',
      reviewedAt: new Date(),
      reviewNotes: 'Auto-approved based on user criteria'
    });

    return true;
  }

  addRule(rule: AutoApprovalRule) {
    this.rules.push(rule);
  }

  removeRule(requestType: string) {
    this.rules = this.rules.filter(r => r.requestType !== requestType);
  }
}

export const autoApprovalService = new AutoApprovalService();
