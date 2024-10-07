import {Flex, PasswordInput, TextInput, Text, Button, Group} from '@mantine/core';
import React from 'react';
import {useFormik} from 'formik';
import loginValidationSchema from '@/components/Login/schemas/login_form.schema.js';
import {userRoutes} from '@/models/routes.js';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      //put query route here!
      //const response = await ValidateLoginUser(values);
      console.log(values);
      navigate(userRoutes.DASHBOARD);
      if (response.statusCode === 200) {
        await Swal.fire({
            icon: 'success',
            title: 'Login efetuado com sucesso',
            showClass: {
              popup: `
               animate__animated
               animate__fadeInUp
               animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },
            showConfirmButton: false,
            timer: 1500
          }
        )
        navigate(userRoutes.DASHBOARD)
      } else {
        await Swal.fire({
            icon: 'error',
            title: 'Email ou senha inválidos',
            showClass: {
              popup: `
               animate__animated
               animate__fadeInUp
               animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },
            showConfirmButton: true,
          },
        )
      }
    },
  })

  return (
    <Flex direction={'column'} gap={'0.5rem'}>
      <Group align={"center"} p={'1rem'} justify={"center"}>
        <Text
          c={"white"}
          size={'40px'}
          align={"center"}
        >
          Arknights
        </Text>
      </Group>
      <TextInput
        name="email"
        variant="filled"
        label="Email"
        c={"white"}
        styles={{input: {background: "transparent", borderColor: "black", color: "black"}}}
        placeholder="Email"
        value={loginForm.values.email}
        onChange={(e) => {
          loginForm.handleChange(e)
          loginForm.validateField("email")
        }}
        onBlur={() => {
          loginForm.validateField("email")
          loginForm.setFieldTouched("email")
        }}
        error={loginForm.touched.email && loginForm.errors.email}
      />
      <PasswordInput
        name="password"
        variant="filled"
        label="Password"
        placeholder="Password"
        c={"white"}
        styles={{input: {background: "transparent", borderColor: "black", color: "black"}}}
        value={loginForm.values.password}
        onChange={(e) => {
          loginForm.handleChange(e)
          loginForm.validateField("password")
        }}
        onBlur={() => {
          loginForm.validateField("password")
          loginForm.setFieldTouched("password")
        }}
        error={loginForm.touched.password && loginForm.errors.password}
      >
      </PasswordInput>
      <Button onClick={() => navigate(userRoutes.RESET_PASSWORD)}  bg={"transparent"}>
        Esqueci minha senha
      </Button>
      <Button bg={"#0057FF"} onClick={loginForm.handleSubmit}>
        Entrar
      </Button>
    </Flex>
  );
}

export default Login;