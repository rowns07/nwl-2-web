import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router-dom'

import './styles.css';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import waningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api';
import Select from '../../components/Select';

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    
    
    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);
    
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
        
    }
    
    function setScheduleItemsValue(position: number, field: string, value: string) {
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updateScheduleItem);
    }
    
    
    
    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(success => {
            console.log('cadastrou', success)
            history.push('/')
        }).catch(error => console.log(error))
    };
    
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
        title="Que incrivel que você quer dar aula" description="TESTE">
        </PageHeader>
        
        <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
        <legend>Seus Dados</legend>
        <Input
        name={name}
        onChange={(e) => { setName(e.target.value) }}
        label="Nome Completo" />
        
        <Input
        name={avatar}
        onChange={(e) => { setAvatar(e.target.value) }}
        label="Avatar" />
        
        
        <Input
        name={whatsapp}
        onChange={(e) => { setWhatsapp(e.target.value) }}
        label="Whatsapp" />
        
        <TextArea
        name="bio"
        onChange={(e) => { setBio(e.target.value) }}
        label="Biografia"
        />
        </fieldset>
        
        <fieldset>
        <legend>Sobre a aula</legend>
        <Select
        name={subject}
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
        
        <Input
        name={cost}
        onChange={(e) => { setCost(e.target.value) }}
        label="Custo da sua hora por aula" />
        </fieldset>
        
        <fieldset>
        <legend>Horários disponiveis
        <button type="button" onClick={addNewScheduleItem}> + Novo Horário</button>
        </legend>
        
        
        {scheduleItems.map((scheduleItem, index) => {
            return (
                <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                name="week_day"
                label="Dia da Semana"
                value={scheduleItem.week_day}
                onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
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
                name={scheduleItem.from}
                onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                label="Das"
                type="time"
                />
                
                <Input
                name={scheduleItem.to}
                onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                label="Até"
                type="time"
                />
                </div>
                )
            })}
            
            
            
            
            
            </fieldset>
            <footer>
            <p>
            <img src={waningIcon} alt="Aviso Importante" />
            Preencha todos os Dados
            </p>
            <button type="submit"> Salvar Cadastro</button>
            </footer>
            </form>
            </main>
            </div>
            )
        }
        
        export default TeacherForm;