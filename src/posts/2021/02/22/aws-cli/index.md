---
title: 'AWS CLI Cheat Sheet'
date: '2021-02-22'
description: 'Notes regarding the AWS CLI'
layout: post.html
tags: posts
---

While I usually use Microsoft Azure cloud services for personal development, I figured that it doesn't hurt to branch out and try multiple providers. Especially because they seem to have great complimentary free tiers. [Amazon AWS](https://aws.amazon.com/) also provides a [Command Line Interface](https://aws.amazon.com/cli/) to do quite a lot of different operations.

## Step One : Configuration

[aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) will create a "default profile" to store your default Access Key ID and Secret Access Key in a file on your local machine, under the current user. These defaults will be used if you do not specify what credenials to use at runtime. You can specify multiple profiles, which would let you split up the access keys or regions for your development resources and your production resources, for example.

[This article](https://www.stevejgordon.co.uk/credential-loading-and-the-aws-sdk-for-dotnet-deep-dive) does a great job of showing what your code looks like with and without these defaults:

> Without Defaults
```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions
        {
            Credentials = new BasicAWSCredentials("abc", "def"), // Your secret information
            Region = RegionEndpoint.USWest2
        });
    }
}
```

> With Defaults
```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAWSService<IAmazonDynamoDB>();
    }
}
```

> With Profiles
```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions
        {
            Profile = "default"
        });
    }
}
```

For C# Web Applications, you can also leverage [ASP.NET Environment-Based Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-5.0#environment-based-startup-class-and-methods) options to use different profiles based on whether you're running in development or production environments:

```csharp
public class Startup
{
    public IConfiguration Configuration { get; }
    private readonly IWebHostEnvironment _env;

    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
        Configuration = configuration;
        _env = env;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions
        {
            Profile = _env.IsProduction() ? "production" : "default"
        });
    }
}
```

## Resources

* [AWS Official Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
* [Steve Gordon's Blog](https://www.stevejgordon.co.uk/credential-loading-and-the-aws-sdk-for-dotnet-deep-dive)
* [Microsoft Docs on Startup Configuration](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-5.0#environment-based-startup-class-and-methods)