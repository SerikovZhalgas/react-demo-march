let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 30},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
            {id: 3, message: 'blabla', likesCount: 10},
            {id: 4, message: 'dada', likesCount: 10}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 1, message: 'How is your IT app?'},
            {id: 2, message: 'Cool!'},
            {id: 1, message: 'Good luck!'},
            {id: 2, message: 'Thanks, and you.'}
        ],
        dialogs: [
            {id: 1, name: 'Alisher', img: 'https://cdn.freelance.ru/images/att/1324133_900_600.png'},
            {id: 2, name: 'Serik', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 3, name: 'Zhalgas', img: 'https://i.pinimg.com/550x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg'},
            {id: 4, name: 'Kamila', img: 'https://www.blast.hk/attachments/68493/'},
            {id: 5, name: 'Tamerlan', img: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
            {
                id: 6,
                name: 'Eraly',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU'
            },
        ]
    },
    friendsPage: {
        friends: [
            {
                id: 1,
                name: 'Andrew',
                img: 'data:image/jpeg;base64,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'
            },
            {
                id: 2,
                name: 'Baimurat',
                img: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {id: 3, name: 'Timur', img: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'}
        ]
    }

    // sidebar:{
    //     []
    // }

}

export default state;