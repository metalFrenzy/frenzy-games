using FrenzyWeb.Dto.Game;
using FrenzyWeb.Services.Services;
using Microsoft.AspNetCore.Mvc;



namespace FrenzyWeb.Controllers.Game
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly GameService _gameSerivce;
        public GameController(GameService gameService)
        {
            _gameSerivce = gameService;
        }

        [HttpGet]
        public async Task<ActionResult<List<GameDto>>> GetGames()
        {
            try
            {
                var games = await _gameSerivce.GetAllGames();
                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GameDto>> GetGame(string id)
        {
            try
            {
                var game = await _gameSerivce.GetGameById(id);
                if (game == null)
                {
                    return NotFound();
                }
                return Ok(game);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult<GameDto>> CreateGame([FromBody] CreateGameDto createGameDto)
        {
            try
            {
                var game = await _gameSerivce.CreateGame(createGameDto);
                return Ok(game);

            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }


}




