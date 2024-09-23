"use client";
export const Select = ({
  register,
  options,
  onSelect,
}: {
  register: any;
  options: {
    key: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
}) => {
  return (
    <select
      {...register("bank", { required: true })}
      onChange={(e) => onSelect(e.target.value)}
      className="border bg-[#231b28] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      {options.map((option) => (
        <option value={option.key}>{option.value}</option>
      ))}
    </select>
  );
};
