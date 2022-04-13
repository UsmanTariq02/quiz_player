import { IsNotEmpty, Length } from 'class-validator';
export class CreateQuizDto {
    // Validations On Inputs of Data from User side 
    @IsNotEmpty({
        message: "Title Required"
    })
    @Length(3)
    title: string;

    @IsNotEmpty({
        message: "Description is required"
    })
    @Length(5, 50)
    description: string;
}