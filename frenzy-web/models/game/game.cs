using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FrenzyWeb.Models.Game
{
    public class Game
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public required string Name { get; set; }

        [BsonElement("price")]
        public decimal Price { get; set; }

        [BsonElement("platform")]
        public required string Platform { get; set; } // PS4 or PS5

        [BsonElement("coverImage")]
        public required string CoverImage { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}