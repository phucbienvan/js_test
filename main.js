var users = [{
    id: 1,
    name: 'Kien Dam',
},
{
    id: 2,
    name: 'Son Dang',
},
{
    id: 3,
    name: 'Hung Dam',
}
];
var comments = [{
    id: 1,
    user_id: 1,
    content: 'Anh son chua ra video :('
},
{
    id: 2,
    user_id: 2,
    content: 'Vua ra xog em oi!'
},
{
    id: 3,
    user_id: 1,
    content: 'Cam on anh'
}, {
    id: 4,
    user_id: 2,
    content: 'Oke em'
}
];
var userId = comments.map(function(user) {
return user.user_id
});

function getUsersByIds(idCommetn) {
var result = users.filter(function(user) {
    return idCommetn.includes(user.id);
});
return result
}
var userComments = getUsersByIds(userId);

var html = '';
var blockComment = document.getElementById('comment-block');

comments.forEach(function(comment) {
var user = userComments.find(function(user) {
    return user.id === comment.user_id
});
html += `<li> ${user.name}: ${comment.content}</li>`;
});
blockComment.innerHTML = html;

