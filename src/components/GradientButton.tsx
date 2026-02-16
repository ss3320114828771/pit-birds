interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function GradientButton({ 
  children, 
  onClick, 
  type = 'button',
  className = '' 
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative group overflow-hidden px-6 py-3 rounded-xl font-bold text-white transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%]"></span>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient bg-[length:200%_200%] transition-opacity duration-300"></span>
      <span className="relative z-10">{children}</span>
    </button>
  )
}