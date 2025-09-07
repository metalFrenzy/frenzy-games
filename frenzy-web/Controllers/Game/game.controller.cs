using FrenzyWeb.Dto.Game;
using FrenzyWeb.Services.Services;
using Microsoft.AspNetCore.Mvc;



namespace FrenzyWeb.Controllers.Game
{
    [ApiController]
    [Route("api/[controllers]")]
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


    }


}

