# Etapa 1: Build Angular
FROM node:18 AS client-build
WORKDIR /app
COPY ./SistemaDeVisitaCampeon.Client ./SistemaDeVisitaCampeon.Client
WORKDIR /app/SistemaDeVisitaCampeon.Client
RUN npm install
RUN npm run build

# Etapa 2: Build backend .NET
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ./SistemaDeVisitaCampeon.Server ./SistemaDeVisitaCampeon.Server
WORKDIR /src/SistemaDeVisitaCampeon.Server
COPY --from=client-build /app/SistemaDeVisitaCampeon.Client/dist/ ./wwwroot/
RUN dotnet publish -c Release -o /app/publish

# Etapa final: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "SistemaDeVisitaCampeon.Server.dll"]
