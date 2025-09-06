using FrenzyWeb.Models.Game;
using FrenzyWeb.Dto.Game;
using MongoDB.Driver;
using FrenzyWeb.Services.Database;
namespace FrenzyWeb.Services.Services
{
    public class GameService
    {
        private readonly MongoDBService _mongoDBService;
        public GameService(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        public async Task<List<GameDto>> GetAllGames()
        {
            var games = await _mongoDBService.Games.Find(_ => true).ToListAsync();
            return games.Select(game => new GameDto
            {
                Id = game.Id,
                Name = game.Name,
                Price = game.Price,
                Platform = game.Platform,
                CoverImage = game.CoverImage,
                CreatedAt = game.CreatedAt
            }).ToList();
        }

        public async Task<GameDto?> GetGameById(string id)
        {
            var game = await _mongoDBService.Games.Find(game => game.Id == id).FirstOrDefaultAsync();
            if (game == null) return null;
            return new GameDto
            {
                Id = game.Id,
                Name = game.Name,
                Price = game.Price,
                Platform = game.Platform,
                CoverImage = game.CoverImage,
                CreatedAt = game.CreatedAt
            };
        }
    }
}