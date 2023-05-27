import React from 'react';
import Title from './Title';
import ModuleDetails from './ModuleDetails';

export default function HelloWorld() {
  const calculateAge = (birthDay: string) => {
    const today = new Date();
    const [day, month, year] = birthDay.split('/'); // Separa a data em dia, mês e ano
    const birthDate = new Date(`${year}-${month}-${day}`); // Formata a data de nascimento para o formato 'AAAA-MM-DD'
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const dateOfBirth = '01/01/1995'; // Substitua esta data de nascimento pela data do usuário no formato DD/MM/AAAA

  return (
    <div>
      <Title />
      <ModuleDetails />
      <p>
        Your age is:
        {' '}
        {calculateAge(dateOfBirth)}
      </p>
    </div>
  );
}
