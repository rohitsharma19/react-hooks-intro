import React,{useState} from 'react';

export default function Register(){
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:""
    });
    const [user, setUser] = useState(null);
    
    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm({
            username:"",
            email:"",
            password:""
        })

    }

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
        
    }

    return (
        <div style={{textAlign:'center'}}>
            <h2>Register</h2>
            <form style={{display:"grid",alignItems:"center",justifyItems:"center"}} onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange}/>
                <input type="email" name="email" value={form.email} placeholder="Email Address" onChange={handleChange}/>
                <input type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>

            {user && JSON.stringify(user, null, 2)}
        </div>
    )
}