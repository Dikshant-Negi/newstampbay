import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const trim = (text: string, count: number): string => {
  if (text.length <= count) return text;
  return text.slice(0, count).trimEnd() + '...';
};
export const data = [
  {
    img: "featuredProducts/f1.png",
    price: 2400.0,
    text: "INDIA 1826 ENTIRE FROM CHANDERNAGORE TO INDIGO FACTORY,ADDAH...",
  },
  {
    img: "featuredProducts/f2.jpg",
    price: 450.5,
    text: "INDIA 1838 CALCUTTA “SHIP POSTAGE 3/ INLAND DO.6 / AN.9/2 TOLAS”HG SR43 ...",
  },
  {
    img: "featuredProducts/f3.png",
    price: 325.0,
    text: "INDIA 1818 “CALCUTTA POST NOT PAID/28 JULY 1818” D.C. ON...",
  },
  {
    img: "featuredProducts/f4.png",
    price: 5500.0,
    text: "INDIA 1830 PRE-STAMP COVER FROM UK TO CALCUTTA",
  },
  {
    img: "featuredProducts/f5.png",
    price: 12500.0,
    text: "1827 ENTIRE LETTER FROM NORWOOD GREAT BRITAIN TO...",
  },
  {
    img: "featuredProducts/f4.png",
    price: 5500.0,
    text: "INDIA 1830 PRE-STAMP COVER FROM UK TO CALCUTTA",
  },
  {
    img: "featuredProducts/f5.png",
    price: 12500.0,
    text: "1827 ENTIRE LETTER FROM NORWOOD GREAT BRITAIN TO...",
  },
  {
    img: "featuredProducts/f4.png",
    price: 5500.0,
    text: "INDIA 1830 PRE-STAMP COVER FROM UK TO CALCUTTA",
  },
  {
    img: "featuredProducts/f5.png",
    price: 12500.0,
    text: "1827 ENTIRE LETTER FROM NORWOOD GREAT BRITAIN TO...",
  },
  {
    img: "featuredProducts/f4.png",
    price: 5500.0,
    text: "INDIA 1830 PRE-STAMP COVER FROM UK TO CALCUTTA",
  },
  {
    img: "featuredProducts/f5.png",
    price: 12500.0,
    text: "1827 ENTIRE LETTER FROM NORWOOD GREAT BRITAIN TO...",
  },
];

export const validateForm = (form:any,setErrors:any) => {
  const newErrors: { [key: string]: string } = {};
  const requiredFields = [
    "firstname",
    "lastname",
    "country",
    "address",
    "town",
    "state",
    "zipcode",
    "phone",
    "email",
  ];

  requiredFields.forEach((field) => {
    if (!form[field]) {
      newErrors[field] = "This field is required";
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (form.email && !emailRegex.test(form.email)) {
    newErrors.email = "Invalid email address";
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (form.phone && !phoneRegex.test(form.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
