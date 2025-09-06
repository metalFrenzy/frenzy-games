using MongoDB.Driver;
using FrenzyWeb.Models.Game;

namespace FrenzyWeb.Services.Database
{
    public class MongoDBService
    {
        private readonly IMongoDatabase _database;
        public MongoDBService(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("MongoDB");
            var mongoClient = new MongoClient(connectionString);
            _database = mongoClient.GetDatabase("frenzy-games");
        }
        public IMongoCollection<Game> Games => _database.GetCollection<Game>("games");
    }

}