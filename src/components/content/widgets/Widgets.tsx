import yaDisk from '../../../assets/imgs/content/widgets/yandexDisk.svg';
import googleDrive from '../../../assets/imgs/content/widgets/googleDrive.svg';
import distributionOfApplication from '../../../assets/imgs/content/widgets/distributionOfApplication.svg';
import time from '../../../assets/imgs/content/widgets/time.svg';
import visitHistory from '../../../assets/imgs/content/widgets/visitHistory.svg';
import transactionSync from '../../../assets/imgs/content/widgets/transactionSync.svg';
import syncWithAsana from '../../../assets/imgs/content/widgets/syncWithAsana.svg';
import telegramNews from '../../../assets/imgs/content/widgets/telegramNews.svg';
import { useState } from 'react';
import { Select } from './select/Select';
import { Action } from './Action';
import { Ball } from '../../ui/ball/Ball';
import { Light } from '../../ui/Light';
import { Glass } from '../../ui/glass/Glass';

const items = [
  {
    img: yaDisk,
    name: 'Яндекс Диск',
    id: 0,
    possibilities: [
      'Загрузка файлов любого формата0',
      'Сортировка всех файлов по папкам0',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа0'
    ]
  },
  {
    img: googleDrive,
    name: 'Google Drive',
    id: 1,
    possibilities: [
      'Загрузка файлов любого формата1',
      'Сортировка всех файлов по папкам1',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа1'
    ]
  },
  {
    img: distributionOfApplication,
    name: 'Распределение заявок',
    id: 2,
    possibilities: [
      'Загрузка файлов любого формата2',
      'Сортировка всех файлов по папкам2',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа2'
    ]
  },
  {
    img: time,
    name: 'Время на этапе',
    id: 3,
    possibilities: [
      'Загрузка файлов любого формата3',
      'Сортировка всех файлов по папкам3',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа3'
    ]
  },
  {
    img: visitHistory,
    name: 'История посещений',
    id: 4,
    possibilities: [
      'Загрузка файлов любого формата4',
      'Сортировка всех файлов по папкам4',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа4'
    ]
  },
  {
    img: transactionSync,
    name: 'Синхронизация сделок',
    id: 5,
    possibilities: [
      'Загрузка файлов любого формата5',
      'Сортировка всех файлов по папкам5',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа5'
    ]
  },
  {
    img: syncWithAsana,
    name: 'Синхронизация с Asana',
    id: 6,
    possibilities: [
      'Загрузка файлов любого формата6',
      'Сортировка всех файлов по папкам6',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа6'
    ]
  },
  {
    img: telegramNews,
    name: 'Уведомление в Telegram',
    id: 7,
    possibilities: [
      'Загрузка файлов любого формата7',
      'Сортировка всех файлов по папкам7',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа7'
    ]
  },
  {
    img: yaDisk,
    name: 'Яндекс Диск',
    id: 8,
    possibilities: [
      'Загрузка файлов любого формата8',
      'Сортировка всех файлов по папкам8',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа8'
    ]
  },
  {
    img: googleDrive,
    name: 'Google Drive',
    id: 9,
    possibilities: [
      'Загрузка файлов любого формата9',
      'Сортировка всех файлов по папкам9',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа9'
    ]
  },
  {
    img: distributionOfApplication,
    name: 'Распределение заявок',
    id: 10,
    possibilities: [
      'Загрузка файлов любого формата10',
      'Сортировка всех файлов по папкам10',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа10'
    ]
  },
  {
    img: time,
    name: 'Время на этапе',
    id: 11,
    possibilities: [
      'Загрузка файлов любого формата11',
      'Сортировка всех файлов по папкам11',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа11'
    ]
  },
  {
    img: visitHistory,
    name: 'История посещений',
    id: 12,
    possibilities: [
      'Загрузка файлов любого формата12',
      'Сортировка всех файлов по папкам12',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа12'
    ]
  },
  {
    img: transactionSync,
    name: 'Синхронизация сделок',
    id: 13,
    possibilities: [
      'Загрузка файлов любого формата13',
      'Сортировка всех файлов по папкам13',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа13'
    ]
  },
  {
    img: syncWithAsana,
    name: 'Синхронизация с Asana',
    id: 14,
    possibilities: [
      'Загрузка файлов любого формата14',
      'Сортировка всех файлов по папкам14',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа14'
    ]
  },
  {
    img: telegramNews,
    name: 'Уведомление в Telegram',
    id: 15,
    possibilities: [
      'Загрузка файлов любого формата15',
      'Сортировка всех файлов по папкам15',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа15'
    ]
  },
  {
    img: yaDisk,
    name: 'Яндекс Диск',
    id: 16,
    possibilities: [
      'Загрузка файлов любого формата16',
      'Сортировка всех файлов по папкам16',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа16'
    ]
  },
  {
    img: googleDrive,
    name: 'Google Drive',
    id: 17,
    possibilities: [
      'Загрузка файлов любого формата17',
      'Сортировка всех файлов по папкам17',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа17'
    ]
  },
  {
    img: distributionOfApplication,
    name: 'Распределение заявок',
    id: 18,
    possibilities: [
      'Загрузка файлов любого формата18',
      'Сортировка всех файлов по папкам18',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа18'
    ]
  },
  {
    img: time,
    name: 'Время на этапе',
    id: 19,
    possibilities: [
      'Загрузка файлов любого формата19',
      'Сортировка всех файлов по папкам19',
      'Отображение файлов прямо в сделке в виде примечания, а так же в панели справа19'
    ]
  }
]

export type WindgetType = typeof items[0];

export const Widgets: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<WindgetType>(items[0]);

  return <section className="mt80-160 relative" id='widgets'>
    <Ball className='w-7 h-7 top-[15%] -right-[14px]' color='purple' />
    <Light className='bg-dark-red top-1/2 -translate-y-1/2 -left-16' size={180} />
    <Light className='bg-orange bottom-0 -right-12' size={180} />
    <div>
      <h2>Виджеты</h2>
      <div className='mt40-70 flex flex-wrap items-center justify-between gap-x-1 gap-y-7 max-w-[770px]'>
        <p className="text24 font-bold max-w-[13em]">
          Для вас разработали
          <span className="orange-to-red-text"> готовые решения в виде виджетов</span>
        </p>
        <p className="text14-18 max-w-[15em]">20 виджетов помогут автоматизировать ваш отдел.</p>
      </div>
    </div>
    <div className='relative mt20-50 grid sm:grid-cols-[1fr_max-content] sm:gap-y-12 sm:gap-x-[4%] sm:border sm:border-gray md:gap-x-[8%]'>
      <Glass className='max-sm:hidden w-full h-full' style={{ background: 'linear-gradient(152.66deg, rgba(26, 29, 35, 0.1) -0.56%, rgba(26, 29, 35, 0.1) 30.32%, rgba(26, 29, 35, 0.1) 59.86%, rgba(26, 29, 35, 0.2) 89.45%, rgba(26, 29, 35, 0.2) 115.41%)' }} />
      <Select currentItem={currentItem} items={items} setCurrentItem={setCurrentItem} />
      <Action widgetName={currentItem.name} />
    </div>
  </section>
};