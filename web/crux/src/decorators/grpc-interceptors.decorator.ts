import { UseInterceptors } from '@nestjs/common'
import AuditLoggerInterceptor from 'src/interceptors/audit-logger.interceptor'
import GrpcErrorInterceptor from 'src/interceptors/grpc.error.interceptor'
import GrpcLoggerInterceptor from 'src/interceptors/grpc.logger.interceptor'
import GrpcUserInterceptor from 'src/interceptors/grpc.user.interceptor'
import PrismaErrorInterceptor from 'src/interceptors/prisma-error-interceptor'

const UseGrpcInterceptors = (): MethodDecorator & ClassDecorator =>
  UseInterceptors(
    GrpcLoggerInterceptor,
    GrpcUserInterceptor,
    GrpcErrorInterceptor,
    PrismaErrorInterceptor,
    AuditLoggerInterceptor,
  )

export default UseGrpcInterceptors