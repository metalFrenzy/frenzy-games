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

        public async Task<bool> DeleteGame(string id)
        {
            var result = await _mongoDBService.Games.DeleteOneAsync(game => game.Id == id);
            return result.DeletedCount > 0;
        }

        public async Task<GameDto?> updateGame(string id, UpdateGameDto updateGameDto)
        {
            var updateDefintion = Builders<Game>.Update;
            var updates = new List<UpdateDefinition<Game>>();
            if (!string.IsNullOrEmpty(updateGameDto.Name))
                updates.Add(updateDefintion.Set(g => g.Name, updateGameDto.Name));
            if (!string.IsNullOrEmpty(updateGameDto.Platform))
                updates.Add(updateDefintion.Set(g => g.Platform, updateGameDto.Platform));
            if (updateGameDto.Price.HasValue)
                updates.Add(updateDefintion.Set(g => g.Price, updateGameDto.Price));
            if (!string.IsNullOrEmpty(updateGameDto.CoverImage))
                updates.Add(updateDefintion.Set(g => g.CoverImage, updateGameDto.CoverImage));
            if (updates.Count == 0) return null;
            var combinedUpdate = updateDefintion.Combine(updates);
            var result = await _mongoDBService.Games.FindOneAndUpdateAsync(
              g => g.Id == id,
              combinedUpdate,
              new FindOneAndUpdateOptions<Game> { ReturnDocument = ReturnDocument.After }
          );
            if (result == null) return null;
            return new GameDto
            {
                Id = result.Id,
                Name = result.Name,
                Price = result.Price,
                Platform = result.Platform,
                CoverImage = result.CoverImage,
                CreatedAt = result.CreatedAt
            };

        }
    }
}