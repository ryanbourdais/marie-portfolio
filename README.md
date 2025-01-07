# Portfolio Website Content Management

This guide explains how to update the website content without touching the code.

## How to Update Content

All editable content is located in the `src/config` folder:

1. **Basic Information** (`content.ts`)
   - Site title, description
   - Contact information
   - Social media links

2. **Images** (`images.ts`)
   - Logo
   - Profile photo
   - Gallery images
   - Project photos

3. **Theme** (`theme.ts`)
   - Colors
   - Fonts
   - Other visual elements

## Updating Text Content

1. Open `src/config/content.ts`
2. Find the section you want to update
3. Modify the text between the quotes
4. Save the file

For example, to update the hero section, find this block:

    export const heroContent = {
      title: "Hi, I'm Marie French",
      subtitle: "Architectural Draftsman specializing in..."
    }

And modify the text between the quotes:

    export const heroContent = {
      title: "Your New Title Here",
      subtitle: "Your new subtitle text here"
    }

## Adding/Updating Images

1. Add your image to the `public/images` folder
2. Update the image path in `src/config/images.ts`

For example:

    export const images = {
      profilePhoto: "/images/your-new-photo.jpg",
      gallery: {
        featured: [
          {
            url: "/images/your-new-project-photo.jpg",
            alt: "Description of your new image",
            caption: "Caption for your new image"
          }
        ]
      }
    }

## Updating Contact Information

1. Open `src/config/content.ts`
2. Find the contact section
3. Update the values as needed

For example:

    export const siteConfig = {
      contact: {
        email: "your.email@example.com",
        phone: "Your new phone number",
        location: "Your new location"
      }
    }

## Need Help?

Contact [developer contact] for technical assistance.
