import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';

function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-7 shadow-xl bg-white rounded-[15px] w-[900px] h-[774px] gap-5 flex flex-col"
    >
      <h1 className="text-[20px] font-semibold leading-[100%]">Password</h1>

      <div className="flex justify-between w-full gap-7 py-5 lato-font">
        {/* Current Password (disabled) */}
        <div className="flex flex-col w-[50%] gap-5">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[#6B7280] text-[20px] font-semibold">Current Password</h1>
          </div>
          <input
            {...register('current-password')}
            className="w-full rounded-[12px] outline-none bg-[#F3F3F3] px-5 py-3 disabled:cursor-not-allowed"
            type="password"
            placeholder="Password"
            disabled
            value={12345678910}
          />
        </div>

        {/* New Password + Confirm Password */}
        <div className="w-[50%] flex flex-col gap-8">
          {/* New Password */}
          <div className="flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[#6B7280] text-[20px] font-semibold">New Password</h1>
            </div>
            <input
              {...register('new-password', {
                required: 'New password is required',
                minLength: { value: 6, message: 'Minimum 6 characters' },
              })}
              className="w-full rounded-[12px] outline-none bg-[#F3F3F3] px-5 py-3"
              type="password"
              placeholder="Password"
            />
            {typeof errors['new-password']?.message === 'string' && (
              <p className="text-sm text-red-600">{errors['new-password']?.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[#6B7280] text-[20px] font-semibold">Confirm Password</h1>
            </div>
            <input
              {...register('confirm-password', {
                required: 'Confirm your password',
                validate: (value) =>
                  value === watch('new-password') || 'Passwords do not match',
              })}
              className="w-full rounded-[12px] outline-none bg-[#F3F3F3] px-5 py-3"
              type="password"
              placeholder="Password"
            />
            {typeof errors['confirm-password']?.message === 'string' && (
              <p className="text-sm text-red-600">{errors['confirm-password']?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button text="Confirm" className="w-full justify-center" />
        </div>
      </div>
    </form>
  );
}

export default ChangePassword;
