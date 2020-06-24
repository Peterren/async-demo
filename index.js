console.log('Before');



// getUser(1)
// .then(user=>getRepo(user.gitHubUserName))
// .then(repos=>getCommits(repos[0]))
// .then(commits=>console.log(commits))
// .catch(err=>console.log(err.message));

console.log('After')

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repo = await getRepo(user);
        const commits = await getCommits(repo);
        console.log(commits);
    }
    catch (err){
        console.log(err);
    }
};

displayCommits();

function getCommits(repos){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Calling github api');
            resolve(['commit']);
        }, 2000);
    })
};


function getRepo(user){
    getRepo(user.gitHubUserName, getCommits);
};

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a DB');
            resolve({id: id, gitHubUserName: 'YR'});
        }, 2000);
    });
}

function getRepo(username){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a repo list from a DB');
            resolve({username: ['repo1', 'repo2', 'repo3']});
        }, 2000);
    });
}