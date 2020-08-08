import React, { FormEvent, useState } from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {

	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');


	async function handleSearchClass(e:FormEvent){
		e.preventDefault();

	const resposta = await api.get('classes',{
			params:{
					subject,
					week_day,
					time
				  }
		});

		setTeachers(resposta.data)

	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Esses são os proffys disponiveis">
				<form id="search-teachers" onSubmit={handleSearchClass}>
					<Select
						name={subject}
						value={subject}
						onChange={(e) => { setSubject(e.target.value) }}
						label="Materia"
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Ciências', label: 'Ciência' },
							{ value: 'Fisica', label: 'Fisica' },
							{ value: 'Quimica', label: 'Quimica' }
						]}
					/>

					<Select
						name={week_day}
						value={week_day}
						onChange={(e) => { setWeekDay(e.target.value) }}
						label="Dia da Semana"
						options={[
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda-feira' },
							{ value: '2', label: 'Terça-feira' },
							{ value: '3', label: 'Quarta-feira' },
							{ value: '4', label: 'Quinta-feira' },
							{ value: '5', label: 'Sexta-feira' },
							{ value: '6', label: 'Sabado-feira' }

						]}
					/>

					<Input
						type="time"
						onChange={(e) => { setTime(e.target.value) }}
						name={time}
						label="Hora"
					/>

					<button type="submit">Buscar</button>

				</form>
			</PageHeader>

			<main>
				{teachers.map(teacher =>{
					return(
						<TeacherItem key={teacher} teacher={teacher} />
					)
				})}
			</main>

		</div>
	)
}

export default TeacherList;