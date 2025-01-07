import Image from 'next/image'

export function ProfileImage() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
      <Image
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
        alt="Professional headshot placeholder"
        fill
        className="object-cover"
      />
    </div>
  )
} 