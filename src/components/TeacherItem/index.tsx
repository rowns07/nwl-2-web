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

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <div>
                    <img src="https://avatars3.githubusercontent.com/u/6974831?s=460&u=1a4fe9ab2da3948723361308911fd55a36b757d2&v=4" alt="Diego Souza" />
                    <strong>
                        Diego Souza
                    </strong>
                    <span>
                        ED FISICA
                    </span>
                </div>
            </header>

            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose
                    <br /><br />
                    HAHAHAHAHAH AHHKDJS KDJSKDJKSJDSKD
                    </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>
                        R$ 80,00
                        </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;