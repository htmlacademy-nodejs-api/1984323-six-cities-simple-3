import { IsEmail, IsString, Length } from 'class-validator';

export default class CreateUserDto {
  @IsString({ message: 'Name is required' })
  @Length(1, 15, { message: 'Name length must be between 1 and 15' })
  public hostName!: string;

  @IsEmail({}, { message: 'Email must be vallid address' })
  public email!: string;

  public avatarUrl!: string;

  @IsString({ message: 'Password is required' })
  @Length(6, 12, { message: 'Password length must be between 1 and 15' })
  public password!: string;

  public isPro!: boolean;
}
