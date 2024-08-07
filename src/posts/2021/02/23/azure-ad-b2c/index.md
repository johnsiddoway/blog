---
title: 'Azure AD / AD B2C Notes'
date: '2021-02-23'
description: Notes regarding Azure AD / AD B2C
layout: post.html
tags: posts
---

Azure Active Directory & Active Directory Business To Customer, abbreviated as "Azure AD" and "Azure AD B2C," are at least one option that Microsoft provides for authentication in the cloud. I only mention authentication because, as far as I can tell, authorization is either sorely lacking or completely absent.

## Authentication vs Authorization, What's the Difference?

This [Stackoverflow Answer](https://stackoverflow.com/a/6556548/2747660) is probably the most succint explanation I've read on the difference:

> Authentication is the process of ascertaining that somebody really is who they claim to be.
> Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read.

## Why I Wanted It

I have a few different personal websites that I've set up for various reasons. Almost all of them are one-off, proof of concept things. I don't really want people getting in and mssing around with the data. So I've had to re-implement authentication multiple times. Sure, Microsoft's project templates make it pretty easy, and you can copy-paste from one project to another, or even make your own personal authentication and authorization package to try and stop repeating yourself.

But copy-pasting only gets you so far. If it turns out there's a security flaw in the implementation of one site, then they're all potentially flawed. If I want to branch out and try building a website with a different backend, then I may need to start over anyway. At least using Azure AD, I can be fairly confident that I won't be the only website that had a security flaw. Plus, since almost all of the functionality for Azure AD authentication is inside the respective NuGet packages, deploying security patches is fairly easy.

## How'd It Go?

Over the course of a few hours, I read through dozens of Microsoft Tutorials, and watched several videos. I can now set up an AD App in the cloud and create a new MVC Web App using cloud authentication in 30 minutes or less. All in all, not a terrible steep learning curve. The biggest problem was that the UI has changed quite a bit over time, as have the vended libraries. The first time I got it working, I was using `Microsoft.AspNetCore.Authentication.AzureADB2C.UI` (I think), but that package is apparently deprecated in favor of `Microsoft.Identity.Web` and `Microsoft.Identity.Web.UI`. But only half of the related packages **say** "please stop using the deprecated packages."

## My Grievances

1. Because there are so many different client side frameworks and packages, there is a lot of documentation to wade through to find the one that matches what you think you're trying to do.
1. The docs related to authentication and authorization were a lot harder to skim than most of the other Microsoft docs I've read. Either I don't understand the topic, or whomever authored the auth docs I've read was targeting a different audience more familiar with the domain.
1. The UI seems to change quite frequently, which meant a lot of pages have outdated screenshots. Or described a user flow that didn't exist (referencing buttons that didn't exist, for example).
1. When setting up an Active Directory client, the Azure portal swaps you to a different login. Confusing until you get used to it.

## Resources

* [Microsoft Dev Blogs](https://devblogs.microsoft.com/aspnet/user-accounts-made-easy-with-azure/)
* [Azure Tutorial Docs](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)
 * **Note:** It turns out this is outdated already
 * [Microsoft.Identity.Web Sample Project](https://docs.microsoft.com/en-us/samples/azure-samples/active-directory-aspnetcore-webapp-openidconnect-v2/enable-webapp-signin/) - Specifically, the one for OpenIDConnect & Azure AD B2C helped out a ton
 * [Sample Project for Microsoft.Identity.Web and AAD B2C](https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC/1-5-B2C)
 * [StackOverflow Answer for 404 on Sign Out](https://stackoverflow.com/questions/59949443/how-to-fix-error-404-when-logging-out-on-an-asp-net-core-mvc-app-against-azure-a)
 * https://github.com/azure-ad-b2c/samples/tree/master/policies/relying-party-rbac