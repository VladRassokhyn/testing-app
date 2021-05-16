const Test = require('./test.model');

const tests = [
    {
        "name": "Первый тест",
        "description": "Первый тест из редактора тестов",
        "questions": [
            {
                "question": "первый вопрос",
                "answers": [
                    {
                        "answer": "ответ 1"
                    },
                    {
                        "answer": "ответ 2"
                    },
                    {
                        "answer": "ответ 3"
                    },
                    {
                        "answer": "ответ 4"
                    }
                ]
            },
            {
                "question": "второй вопрос",
                "answers": [
                    {
                        "answer": "ответ 1"
                    },
                    {
                        "answer": "ответ 2"
                    },
                    {
                        "answer": "ответ 3"
                    }
                ]
            }
        ],
        "id": 3
    },
    {
        "name": "Второй тест",
        "description": "описание второго теста",
        "questions": [
            {
                "question": "Вопрос второго теста",
                "answers": [
                    {
                        "answer": "ответ1"
                    },
                    {
                        "answer": "ответ 2",
                        "isCorrect": false
                    },
                    {
                        "answer": "ответ 3"
                    },
                    {
                        "answer": "правильный ответ",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Второй вопрос второго теста",
                "answers": [
                    {
                        "answer": "ответ 1"
                    },
                    {
                        "answer": "правильный ответ",
                        "isCorrect": true
                    }
                ]
            }
        ],
        "id": 4
    },
    {
        "name": "Третий тест из редактора",
        "description": "Описание третьего теста",
        "questions": [
            {
                "question": "только один вопрос",
                "answers": [
                    {
                        "answer": "правильный ответ",
                        "isCorrect": true
                    },
                    {
                        "answer": "не правильный ответ"
                    }
                ]
            }
        ],
        "id": 5
    },
    {
        "name": "Проверка высоты ",
        "description": "тест для проверки высоты контейнера модалки",
        "questions": [
            {
                "answers": [
                    {
                        "answer": "Ответ",
                        "isCorrect": true
                    },
                    {
                        "answer": "Второй"
                    },
                    {
                        "answer": "Третий"
                    },
                    {
                        "answer": "Четвертый"
                    }
                ],
                "question": "Вопрос"
            },
            {
                "question": "Еще вопрос",
                "answers": [
                    {
                        "answer": "первый"
                    },
                    {
                        "isCorrect": true,
                        "answer": "Второй"
                    },
                    {
                        "answer": "Третий"
                    },
                    {
                        "answer": "Четвертый"
                    }
                ]
            },
            {
                "question": "Третий вопрос",
                "answers": [
                    {
                        "answer": "Первый"
                    },
                    {
                        "answer": "Второй"
                    },
                    {
                        "answer": "Третий"
                    },
                    {
                        "answer": "Четвертый",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Последний вопрос",
                "answers": [
                    {
                        "answer": "первый",
                        "isCorrect": true
                    },
                    {
                        "answer": "второй"
                    },
                    {
                        "answer": "третий"
                    }
                ]
            }
        ],
        "id": 6
    }];

const getAll = async () => tests;
const postTest = async (testData) => tests.push(new Test({...testData, id: tests.length + 1}));
const getTestById = async (id) => tests.find(t => t.id === +id);
const updateTest = async (id, testData) => {
    const test = await getTestById(id);
    const index = tests.indexOf(test);
    tests[index] = {...test, ...testData};
    return tests[index];
};
const removeTest = async (id) => {
    const test = await getTestById(id);
    const index = tests.indexOf(test);
    tests.splice(index, 1);
};

module.exports = {getAll, postTest, getTestById, updateTest, removeTest};