import { useState } from "react";
import { Item } from "./Item";
import { Light } from './../../ui/Light';
import { Ball } from "../../ui/ball/Ball";

const items = [
  {
    question: 'Сколько стоит интеграция X с AmoCRM?',
    id: 0,
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit cupiditate at tempora. Saepe vitae at impedit provident numquam fugit libero? Itaque deserunt explicabo quae suscipit quam nihil sint veniam.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut nemo nostrum saepe ratione reiciendis.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aliquam commodi nobis delectus illo nihil iusto excepturi cum quas pariatur? Iure tenetur maiores, molestias blanditiis doloribus optio quisquam accusantium repudiandae id quia magni debitis illo tempore autem. Vel, doloribus a?',
    ]
  },
  {
    question: 'Требует ли AmoCRM обучения?',
    id: 1,
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit cupiditate at tempora. Saepe vitae at impedit provident numquam fugit libero? Itaque deserunt explicabo quae suscipit quam nihil sint veniam.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut nemo nostrum saepe ratione reiciendis.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aliquam commodi nobis delectus illo nihil iusto excepturi cum quas pariatur? Iure tenetur maiores, molestias blanditiis doloribus optio quisquam accusantium repudiandae id quia magni debitis illo tempore autem. Vel, doloribus a?',
    ]
  },
  {
    question: 'Чем занимается Ваша компания?',
    id: 2,
    answer: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit cupiditate at tempora. Saepe vitae at impedit provident numquam fugit libero? Itaque deserunt explicabo quae suscipit quam nihil sint veniam.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ut nemo nostrum saepe ratione reiciendis.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aliquam commodi nobis delectus illo nihil iusto excepturi cum quas pariatur? Iure tenetur maiores, molestias blanditiis doloribus optio quisquam accusantium repudiandae id quia magni debitis illo tempore autem. Vel, doloribus a?',
    ]
  },
]

export type QandAItemType = typeof items[0];

export const QandA: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<null | number>(null);

  const handleItemClick = (newActiveItemId: number) => {
    console.log(newActiveItemId, openItemId)
    newActiveItemId === openItemId ? setOpenItemId(null) : setOpenItemId(newActiveItemId)
  };

  const Items = items.map((i, index) => <Item {...i} isOpen={openItemId === i.id} onClick={handleItemClick} key={index} />);
  
  return <section className="mt80-160 relative">
    <Light className="bg-orange top-[211px] -translate-y-1/2 -left-8" size={190} />
    <Light className="bg-dark-red top-[211px] -translate-y-1/2 -right-8" size={190} />
    <Ball className="w-10 h-10 right-[10%] top-[105px]" color="red" />
    <Ball className="w-10 h-10 left-[10%] top-[50px] md:top-[63px]" color="yellow" />
    <div>
      <h2>Вопрос/ответ</h2>
      <div className="mt40-70 flex flex-wrap items-center gap-y-7 gap-x-4 max-sm:justify-between sm:gap-x-[20%]">
        <p className="text24 max-w-[13em]">
          Ответы на
          <span className="orange-to-red-text"> часто задаваемые вопросы</span>
        </p>
        <p className="text14-18 font-medium max-w-[17em]">Не нашли ответ на свой вопрос? Оставьте заявку на консультацию!</p>
      </div>
    </div>
    <div className="mt20-50 max-w-[975px]">
      {Items}
    </div>
  </section>
};