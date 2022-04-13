import { EntityRepository, Repository } from "typeorm";
import {Quiz} from "./quiz.entity";

//EntityRepository is a Decorator and Quiz here is an Entity which we already crated to create a table in database
@EntityRepository(Quiz)
//Export Class QuizRepository extends with Repository class and inside the signs we are passing Module Class Name which is now Quiz
// In type ORM Module database will handle through Repository that's why we are extending class with repository class
export class QuizRepository extends Repository<Quiz> {


}