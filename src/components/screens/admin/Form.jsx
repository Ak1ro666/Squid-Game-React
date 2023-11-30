import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = async (data) => {
      try {
         console.log(data);
      } catch (error) {
         if (error.code === 'permission-denied') {
            console.error('У вас недостаточно прав для выполнения этой операции.');
         } else {
            console.error('Произошла другая ошибка:', error);
         }
      }

      reset();
   };

   return (
      <div
         className="py-10 px-20"
         style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '45%',
         }}>
         <h2 className="mb-8 text-white font-bold text-2xl text-center">Add new series</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               className="w-full py-2 px-4 outline-none block mb-3 text-white"
               placeholder="Enter thumbnail path"
               style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
               }}
               {...register('thumbnailPath', {
                  required: true,
               })}
            />
            {errors.thumbnailPath && (
               <span className="text-red-700">Plz fill thumbnail path field</span>
            )}
            <input
               className="w-full py-2 px-4 outline-none block mb-3 mt-3 text-white"
               placeholder="Enter Video url"
               style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
               }}
               {...register('videoUrl', {
                  required: true,
               })}
            />
            {errors.videoUrl && <span className="text-red-700">Plz fill Video url</span>}

            <input
               type="submit"
               value="Add"
               className="block border-none py-2 px-4 outline-none mx-auto mt-10 cursor-pointer bg-pink-800"
               style={{
                  minWidth: 140,
               }}
            />
         </form>
      </div>
   );
};

export default Form;
