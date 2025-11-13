import { Server } from 'socket.io';
import { Notification } from '../models/Notification';

async function notifyUser(userId: string, payload: any) {
  // store in DB (best-effort)
  try { 
    await Notification.create({ 
      userId: String(userId), 
      type: payload.type || 'system_announcement',
      title: payload.title || 'Notification',
      message: payload.message || JSON.stringify(payload),
      data: payload,
      isRead: false
    }); 
  } catch (e) { 
    console.warn('Failed to persist notification', e); 
  }
  // emit via socket
  try { 
    // io.to(userId).emit('notification', payload); 
  } catch (e) { 
    console.warn('Socket emit failed', e); 
  }
}

export default { notifyUser };
