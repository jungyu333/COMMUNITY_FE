import { Controller, useFormContext } from 'react-hook-form';
import { InputField } from '@/components/InputField';

export const EmailInput = () => {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return '이메일을 입력해주세요.';
          }
          if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(data)) {
            return '올바른 이메일 형식이 아닙니다.';
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label={'이메일'}
          placeholder={'이메일을 입력해주세요.'}
          inputMode={'email'}
          returnKeyType={'next'}
          submitBehavior={'submit'}
          onSubmitEditing={() => setFocus('password')}
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
      name={'email'}
      control={control}
    />
  );
};
