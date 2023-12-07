export const Input = ({labelName, type, placeholder}) => {
  return (
    <label className="flex flex-col gap-[7px] w-[100%]"> 
        <span className="text-labelcolor text-[13px] font-popins">{labelName}</span>
        <input type={type} placeholder={placeholder} className="text-labelcolor text-[14px font-popins] rounded-[4px] bg-whitee py-[11px] px-[20px]"/>
    </label>
  )
}
