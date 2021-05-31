export class Test {
    constructor({
        id = 0,
        questions = [],
        name = 'TEST_NAME',
        description = 'TEST_DESCRIPTION',
    } = {}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.questions = questions;
    }
}
