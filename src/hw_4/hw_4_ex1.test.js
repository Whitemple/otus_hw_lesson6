describe('Testing adding additional value to onject, create new and Destructurization: ',()=>{
    const user = {
        name: 'Jhon',
    }
    
    test("Should write 55 to value 'age' ",()=>{
        user['age']=55;
        expect(user.age).toEqual(55);
    });
    test("Create a new onject admin extends user ",()=>{
        const admin = Object.assign({}, user, {role:'admin'})
        expect(admin.role).toBe('admin');
    });
    test("Destructurization object ",()=>{
        const admin = Object.assign({}, user, {role:'admin'})
        let {name, age, role} = admin;
        expect(name).toEqual('Jhon');
        expect(age).toEqual(55);
        expect(role).toEqual('admin');
    });
})