import { Controller , Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        //return {data: quizData};
        return await this.quizService.createNewQuiz(quizData);
    }
}
