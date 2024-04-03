import Image from "next/image"

export const Logo = () => {
  return (
    <Image 
     src="/logo.svg"
     alt="Logo"
     height={50}
     width={50}  
    /> 
  ) 
}