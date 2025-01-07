import Image from 'next/image'

export function ProfileImage() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
      <Image
        src="/images/headshot.jpg"
        alt="Professional headshot placeholder"
        fill
        className="object-cover"
      />
    </div>
  )
} 