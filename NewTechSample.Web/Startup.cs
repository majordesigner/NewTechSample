using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NewTechSample.Web.Startup))]
namespace NewTechSample.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
