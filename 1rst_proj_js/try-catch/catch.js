let json = '{"id":2}';
try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error('В этих данны нет имени');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We are get an error : ${error.name}`);
} finally {
    console.log('i always will working');
}

console.log('continue working');