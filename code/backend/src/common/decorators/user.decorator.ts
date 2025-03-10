import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from '@/user/interfaces/user.interface';

export { IUser };

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user as IUser;
});
