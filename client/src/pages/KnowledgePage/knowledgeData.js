
import mac from './../../img/mac.svg';
import apple from './../../img/apple.svg';
import windows from './../../img/windows.svg';
import android from './../../img/android.svg';

export const services = [
    {
        id: 1,
        name: 'Годовые пакеты',
        path: 'year-services/',
        description: '',
        os: [
            {
                name: 'Android',
                image: android,
                inner: [
                    {
                        name: 'Silver Card',
                        price: '800',
                        include: [
                            {
                                name: 'Тех. поддержка',
                                description: 'Прошивка, обновления, исправление системных сбоев, настройка' +
                                    ' приложений на протяжении 12 месяцев. Поддержка оказывается в магазине, или на' +
                                    ' горячей линии по номеру 044-503-70-30',
                            },
                            {
                                name: 'Первоначальная настройка',
                                description: 'Активация, настройка языка, даты, времени, интернета',
                            },
                            {
                                name: 'Обновление ПО до последней версии',
                                description: 'Обновление систем безопасности, добавление новых функций',
                            },
                            {
                                name: 'Настройка Учетной записи Google',
                                description: 'Активация синхронизации с Google. Восстановление старой учетной записи' +
                                    ' если это возможно',
                            },
                            {
                                name: 'Миграция данных',
                                description: 'Перенос информации со старого телефона. Перенос осуществляется с' +
                                    ' ОДНОГО старого телефона. Максимальный обьем переноса - 20гб, все что больше' +
                                    ' оплачивается отдельно',
                            },
                            {
                                name: 'Настройка браузеров',
                                description: 'Установка Chrome, Firefox, Opera и т.д. Синхронизация закладок и' +
                                    ' истории с учетной записью Google',
                            },
                            {
                                name: 'Настройка аудео и видео плееров',
                                description: 'Установка всех существующих форматов и кодеков аудио/видео, без' +
                                    ' которых большенство медиа-контента не будет воспроизводиться',
                            },
                            {
                                name: 'Настройка офисных программ',
                                description: 'Установка Docs, Sheets, Presentation, Adobe Acrobat. Все "вордовские",' +
                                    ' "екселевские" и т.д. файы будет открываться автоматически в нужной программе.' +
                                    ' Без них даже обычный "вордовский" документ не откроется.',
                            },
                        ]
                    },
                    {
                        name: 'Gold Card',
                        price: '1500',
                        include: []
                    },
                    {
                        name: 'Platinum Card',
                        price: '2000',
                        include: []
                    },
                ]
            },
            {
                name: 'iOS',
                image: apple,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'MacOS',
                image: mac,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'Windows',
                image: windows,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Разовые пакеты',
        description: '',
        os: [
            {
                name: 'Android',
                image: android,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'iOS',
                image: apple,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'MacOS',
                image: mac,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            },
            {
                name: 'Windows',
                image: windows,
                inner: [
                    {
                        name: 'Platinum Card',
                        price: '2000'
                    },
                    {
                        name: 'Gold Card',
                        price: '1500'
                    },
                    {
                        name: 'Silver Card',
                        price: '800'
                    },
                    {
                        name: 'Android Smart Card',
                        price: '600'
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Разовые',
        description: '',
        os: []
    },
    {
        id: 4,
        name: 'Лиц ПО',
        description: '',
        os: []
    },
    {
        id: 5,
        name: 'Space',
        description: '',
        os: []
    },
]