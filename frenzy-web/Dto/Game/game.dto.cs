namespace FrenzyWeb.Dto.Game
{
    public class GameDto
    {
        public string? Id { get; set; }
        public required string Name { get; set; }
        public decimal Price { get; set; }
        public required string Platform { get; set; }
        public required string CoverImage { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class CreateGameDto
    {
        public required string Name { get; set; }
        public decimal Price { get; set; }
        public required string Platform { get; set; }
        public required string CoverImage { get; set; }
    }

    public class UpdateGameDto
    {
        public string? Name { get; set; }
        public decimal? Price { get; set; }
        public string? Platform { get; set; }
        public string? CoverImage { get; set; }
    }
}