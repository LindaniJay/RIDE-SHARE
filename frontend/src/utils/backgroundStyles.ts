/**
 * Standardized Background Styles for RideShare SA
 * 
 * This file provides consistent background patterns across the application.
 * Use these classes instead of inline background styles for consistency.
 */

export const BACKGROUND_CLASSES = {
  // Main page backgrounds
  PRIMARY: 'page-background-gradient', // Blue-purple gradient for main pages
  HERO: 'page-background', // Hero background with image overlay
  LIGHT: 'page-background-light', // Light theme for forms and content pages
  
  // Section backgrounds
  SECTION: 'section-bg', // Standard section background
  SECTION_ELEVATED: 'section-bg-elevated', // Elevated section background
  SECTION_HIGHLIGHT: 'section-bg-highlight', // Highlighted section background
  
  // Glass effects
  GLASS_PANEL: 'glass-panel', // Subtle glass panel
  GLASS_CARD: 'glass-card', // Standard glass card
  GLASS_CARD_ELEVATED: 'glass-card-elevated', // Elevated glass card
  GLASS_CARD_ADAPTIVE: 'glass-card-adaptive', // Enhanced glass card with better readability
  GLASS_CARD_CONTRAST: 'glass-card-contrast', // High contrast glass card for light backgrounds
  GLASS_NAVBAR: 'glass-navbar', // Navigation glass effect
  GLASS_BUTTON: 'glass-button', // Standard glass button
  GLASS_BUTTON_PRIMARY: 'glass-button-primary', // Primary glass button
  GLASS_BUTTON_SECONDARY: 'glass-button-secondary', // Secondary glass button
  
  // Enhanced Dropdown and Navigation
  GLASS_DROPDOWN_ENHANCED: 'glass-dropdown-enhanced', // Enhanced dropdown with better readability
  GLASS_MOBILE_NAV: 'glass-mobile-nav', // Enhanced mobile navigation
  GLASS_BOTTOM_NAV: 'glass-bottom-nav', // Enhanced bottom navigation
} as const;

/**
 * Background usage guidelines:
 * 
 * 1. MAIN PAGES (Dashboard, Home, Search):
 *    - Use `page-background-gradient` for dashboard/admin pages
 *    - Use `page-background` for hero pages with image overlay
 *    - Use `page-background-light` for content-heavy pages (FAQ, Contact)
 * 
 * 2. SECTIONS:
 *    - Use `section-bg` for standard content sections
 *    - Use `section-bg-elevated` for important sections
 *    - Use `section-bg-highlight` for featured content
 * 
 * 3. COMPONENTS:
 *    - Use `glass-card` for standard cards
 *    - Use `glass-card-elevated` for important cards
 *    - Use `glass-card-adaptive` for enhanced readability on any background
 *    - Use `glass-card-contrast` for high contrast on light backgrounds
 *    - Use `glass-panel` for subtle overlays
 *    - Use `glass-button` for standard buttons
 *    - Use `glass-button-primary` for primary actions
 *    - Use `glass-dropdown-enhanced` for enhanced dropdown readability
 *    - Use `glass-mobile-nav` for mobile navigation menus
 *    - Use `glass-bottom-nav` for bottom navigation bars
 * 
 * 4. CONSISTENCY RULES:
 *    - Always use these classes instead of inline styles
 *    - Maintain consistent opacity levels (5%, 10%, 15%)
 *    - Use consistent blur effects (sm, md, lg)
 *    - Keep border colors consistent (white/10, white/20, white/25)
 */

export default BACKGROUND_CLASSES;
