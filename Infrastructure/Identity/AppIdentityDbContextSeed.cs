using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "DuoKhongg",
                    Email = "duokhongg@test.com",
                    UserName = "duokhongg@test.com",
                    Address = new Address
                    {
                        FirstName = "Phuc",
                        LastName = "Ho",
                        Street = "To Vinh Dien",
                        City = "Binh Duong",
                        State = "Di An",
                        ZipCode = "99999"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}