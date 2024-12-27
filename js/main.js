var nameInput=document.getElementById("signup-name")
var emailInput=document.getElementById("signup-email")
var passwordInput=document.getElementById("signup-password")

var loginEmailInput=document.getElementById("login-email")
var loginPasswordInput=document.getElementById("login-password")

var signupBtn=document.getElementById('signup')
var loginBtn=document.getElementById('login')

usersCantainer=[];


if(localStorage.getItem('users')!==null)
{
        usersCantainer=JSON.parse(localStorage.getItem("users"))
}

function signup(){

    // if(localStorage.getItem('users')!==null)
    //     {
    //         usersCantainer=JSON.parse(localStorage.getItem("users"))
    //     }

    var flag=0;
    var user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    };

    for (var i = 0; i < usersCantainer.length; i++)
    {
        if (usersCantainer[i].email == emailInput.value)
        {
            flag=1;
        }
    }
    if(user.name==""||user.email==""||user.password=="")
    {
            flag=2;
    }
    
    if(flag==1)
    {
        document.getElementById("validation").classList.replace("text-success","text-danger")
        document.getElementById("validation").innerText="E-mail Already Exists";
    }
    else if(flag==2)
    {
        document.getElementById("validation").classList.replace("text-success","text-danger")
        document.getElementById("validation").innerText="All Inputs are Required";
    }
    else if(flag==0)
    {
        usersCantainer.push(user);
        localStorage.setItem("users",JSON.stringify(usersCantainer));
        document.getElementById("validation").classList.replace("text-danger","text-success")
        document.getElementById("validation").innerText="Success";
        clearForm();
    }

}

function login(){
    var flag=0;

    // if(localStorage.getItem('users')!==null)
    // {
    //     usersCantainer=JSON.parse(localStorage.getItem("users"))
    // }

    if(loginEmailInput.value ==''||loginPasswordInput.value=='')
    {
        flag=1;
    }

    for(var i=0;i<usersCantainer.length;i++)
    {
        if(loginEmailInput.value == usersCantainer[i].email && loginPasswordInput.value==usersCantainer[i].password)
        {
            localStorage.setItem('sessionUsername', usersCantainer[i].name)
            flag=2;
        }
    }
    if(flag==1)
    {
        document.getElementById('validation').innerText="All Inputs are Required";
    }
    else if(flag==0)
    {
        document.getElementById('validation').innerText="Invalid E-mail or password";
    }
    else if(flag==2)
    {
        location.replace('login.html');
        console.log("ay haga");
    }
}

function logout(){
    localStorage.removeItem('sessionUsername');
}

function clearForm(){
    nameInput.value=null;
    emailInput.value=null;
    passwordInput.value=null;
}

document.getElementById("welcome").innerHTML=`<span>Welcome ${localStorage.getItem('sessionUsername')}</span>`

// signupBtn.addEventListener('click',function(){
//     signup();
// })

// loginBtn.addEventListener('click',function(){
//     login();
// })

