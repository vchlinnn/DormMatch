import { Button, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';

import { auth } from '../support/firebase';

interface FormValues {
  email: string;
  password: string;
}

const defaultValues: FormValues = {
  email: '',
  password: '',
};

function SignUp() {
  const { control, formState, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(user);
      router.navigate('/index');
    } catch (e) {
      // const error = e as AuthError;
      console.log(e);
    }
  };

  console.log(formState.errors);

  return (
    <View>
      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        rules={{ required: 'Please enter an email address' }}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Enter an email address"
            value={value}
          />
        )}
      />
      {formState.errors.email && <Text>{formState.errors.email.message}</Text>}

      <Text>Password</Text>
      <Controller
        control={control}
        name="password"
        rules={{ required: true, minLength: 6 }}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />

      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <Text style={{ textAlign: 'center' }}>
        Already have an account? <Link href="login">Log In</Link>
      </Text>
    </View>
  );
}

export default SignUp;
