"use client";

import { usePathname, useSearchParams,useRouter } from "next/navigation";

const Select = ({ options, value }) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

   
    const handleChange = (e)=>{
        const selectValue = e.target.value;
        const newParams = new URLSearchParams(searchParams.toString());

        if(selectValue){
            newParams.set("sort",selectValue)
        }else{
            newParams.delete("sort")
        }
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
       
    }
    return (
      <select
        className="text-xs py-2 textField__input 
        bg-secondary-0 shadow-lg shadow-black/10 dark:shadow-white/20 border-secondary-200"
        value={value}
        onChange={handleChange}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  };
  export default Select;
  