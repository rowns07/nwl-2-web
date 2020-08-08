import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export interface Teacher {
    id: number;
        name: string;
        avatar: string;
        whatsapp: string;
        bio: string;
        subject: string;
        cost: number;
}
interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    return (
        <article className="teacher-item">
            <header>
                <div>
                    <img src={teacher.avatar} alt={teacher.name} />
                    <strong>
                        {teacher.name}
                    </strong>
                    <span>
                        {teacher.subject}
                    </span>
                </div>
            </header>

            <p>
                    {teacher.bio}
                    </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>
                        R$ {teacher.cost}
                        </strong>
                </p>
                <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                        </a>
            </footer>
        </article>
    )
}

export default TeacherItem;