# RideShare SA - Image Management Guide

## 📁 Directory Structure

```
frontend/public/images/
├── vehicles/              # Individual vehicle photos
│   ├── toyota-hilux-1.jpg
│   ├── toyota-hilux-2.jpg
│   ├── isuzu-npr-1.jpg
│   └── ...
├── categories/            # Vehicle category showcase images
│   ├── bakkie-category.jpg
│   ├── truck-category.jpg
│   ├── minibus-category.jpg
│   └── ...
├── backgrounds/           # Background images
│   ├── hero-background.jpg
│   ├── search-background.jpg
│   └── dashboard-background.jpg
└── defaults/              # Fallback images
    ├── vehicle-placeholder.jpg
    ├── avatar-placeholder.jpg
    └── category-placeholder.jpg
```

## 🖼️ Image Specifications

### Vehicle Images
- **Size:** 800x600px (4:3 aspect ratio)
- **Format:** JPG or WebP
- **Quality:** High quality, optimized for web
- **Naming:** `{make}-{model}-{number}.jpg`

### Category Images
- **Size:** 400x300px (4:3 aspect ratio)
- **Format:** JPG or WebP
- **Style:** Showcase the vehicle type clearly
- **Naming:** `{category}-category.jpg`

### Background Images
- **Size:** 1920x1080px (16:9 aspect ratio)
- **Format:** JPG or WebP
- **Quality:** High resolution for hero sections
- **Naming:** `{section}-background.jpg`

## 🚗 Required Images

### Vehicle Categories
- [ ] `bakkie-category.jpg` - 4WD/Bakkie showcase
- [ ] `truck-category.jpg` - Commercial trucks
- [ ] `minibus-category.jpg` - Passenger transport
- [ ] `sedan-category.jpg` - Standard cars
- [ ] `suv-category.jpg` - SUVs and crossovers
- [ ] `luxury-category.jpg` - Premium vehicles

### Individual Vehicles
- [ ] `toyota-hilux-1.jpg` - Toyota Hilux front view
- [ ] `toyota-hilux-2.jpg` - Toyota Hilux side view
- [ ] `isuzu-npr-1.jpg` - Isuzu NPR truck
- [ ] `toyota-quantum-1.jpg` - Toyota Quantum minibus
- [ ] `bmw-x5-1.jpg` - BMW X5 SUV
- [ ] `toyota-corolla-1.jpg` - Toyota Corolla sedan

### Background Images
- [ ] `hero-background.jpg` - Main landing page
- [ ] `search-background.jpg` - Vehicle search page
- [ ] `dashboard-background.jpg` - User dashboard

### Default/Fallback Images
- [ ] `vehicle-placeholder.jpg` - Default vehicle image
- [ ] `avatar-placeholder.jpg` - Default user avatar
- [ ] `category-placeholder.jpg` - Default category image

## 💡 Usage in Code

### Import Image Paths
```typescript
import { IMAGE_PATHS, getVehicleImages, getCategoryImage } from '../data/imagePaths';
```

### Use in Components
```tsx
// Get vehicle images
const vehicleImages = getVehicleImages('Toyota', 'Hilux');

// Get category image
const categoryImage = getCategoryImage('bakkie');

// Use in JSX
<img src={vehicleImages[0]} alt="Toyota Hilux" />
```

### Image Gallery Component
```tsx
import VehicleImageGallery from '../components/VehicleImageGallery';

<VehicleImageGallery
  make="Toyota"
  model="Hilux"
  images={vehicleImages}
  className="w-full h-64"
/>
```

## 🎨 Design Guidelines

### Vehicle Photos
- Show the vehicle clearly and professionally
- Include multiple angles (front, side, interior)
- Good lighting and clear backgrounds
- Consistent styling across all images

### Category Images
- Represent the vehicle type clearly
- Use South African context when possible
- Professional, high-quality images
- Consistent aspect ratios

### Background Images
- High resolution for crisp display
- South African landscapes or cityscapes
- Subtle enough not to interfere with text
- Optimized for web performance

## 📱 Responsive Considerations

- Images should work well on mobile devices
- Consider different screen densities (1x, 2x, 3x)
- Use appropriate image formats (WebP for modern browsers)
- Implement lazy loading for performance

## 🔧 Technical Implementation

### Image Optimization
- Compress images for web delivery
- Use appropriate formats (WebP, JPG, PNG)
- Implement responsive images with srcset
- Add proper alt text for accessibility

### Error Handling
- Fallback to default images if main images fail
- Graceful degradation for missing images
- Loading states for image loading

### Performance
- Lazy load images below the fold
- Use appropriate image sizes for different contexts
- Implement image caching strategies

