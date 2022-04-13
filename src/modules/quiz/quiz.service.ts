import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';

export class QuizService {
    constructor(
        @InjectRepository(QuizRepository) private quizRepository: QuizRepository
    ) {}
    getAllQuiz(){
        return [1 , 2 , 3 , 4 ,5];
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}